"use client"

import { useRef } from 'react'
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const SearchBar = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const path = usePathname()

    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const updateParam = (key: string, value: string) => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current)
        }

        debounceRef.current = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString())

            if (value) {
                params.set(key, value)
            } else {
                params.delete(key)
            }

            router.replace(`${path}?${params.toString()}`)
        }, 300)
    }

    return (
        <div className="flex flex-col sm:flex-row gap-3">
            <Field orientation="horizontal" className='max-w-84 flex flex-col items-start'>
                <FieldLabel>Search by title</FieldLabel>
                <Input
                    defaultValue={searchParams.get('title') ?? ''}
                    onChange={(e) => updateParam('title', e.target.value)}
                    type="search"
                    placeholder="Search services..."
                />
            </Field>

            <Field orientation="horizontal" className='max-w-84 flex flex-col items-start'>
                <FieldLabel>Search by location</FieldLabel>
                <Input
                    defaultValue={searchParams.get('location') ?? ''}
                    onChange={(e) => updateParam('location', e.target.value)}
                    type="search"
                    placeholder="Location..."
                />
            </Field>
        </div>
    )
}

export default SearchBar