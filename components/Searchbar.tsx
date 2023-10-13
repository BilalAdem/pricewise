"use client"
import { scrapeAndStoreProducts } from '@/lib/actions'
import { FormEvent, useState } from 'react'

const isValidAmazonProductURL = (url: string) => {
    try {
      const parsedURL = new URL(url)
      const hostname = parsedURL.hostname
      if(hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.endsWith('amazon')) {
        return true
      }
    } catch (error) {
      return false
    }
    return false
}

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('' as string)
  const [isLoading, setIsLoading] = useState(false) as [boolean , (value: boolean) => void]
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const isValidLink = isValidAmazonProductURL(searchPrompt)
        if(!isValidLink) {
          alert('Please enter a valid Amazon product link')
          return
        }
        try {
          setIsLoading(true)
          const products = await scrapeAndStoreProducts(searchPrompt)
          
        } catch (error) {
          console.log(error)
        } finally{
          setIsLoading(false)
        }
    }
  return (
    <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
        <input className='searchbar-input' type='text' placeholder='Enter product link' value={searchPrompt} onChange={(e) => setSearchPrompt(e.target.value)} />
        <button type='submit' className='searchbar-btn' disabled={searchPrompt === ''}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
    </form>
  )
}

export default Searchbar