"use client"

import { useRef } from 'react'
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const SearchBar = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const path = usePathname()

    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const handleSearch = (value: string) => {

        if (debounceRef.current) {
            clearTimeout(debounceRef.current)
        }

        debounceRef.current = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString())

            if (value) {
                params.set('title', value)
            } else {
                params.delete('title')
            }

            router.replace(`${path}?${params.toString()}`)
        }, 500)
    }

    return (
        <Field orientation="horizontal" className='max-w-80'>
            <Input
                defaultValue={searchParams.get('title') ? searchParams.get('title')?.toString() : ''}
                onChange={(e) => handleSearch(e.target.value)}
                type="search"
                placeholder="Search..."
            />
        </Field>
    )
}

export default SearchBar