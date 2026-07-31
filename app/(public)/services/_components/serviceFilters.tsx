"use client"

import { Field, FieldLabel } from '@/components/ui/field';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const SORT_OPTIONS = [
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'avgRating-desc', label: 'Rating: High to Low' },
    { value: 'avgRating-asc', label: 'Rating: Low to High' },
    { value: 'createdAt-desc', label: 'Newest First' },
    { value: 'createdAt-asc', label: 'Oldest First' }
]

const ServicesFilter = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const path = usePathname()

    const currentValue = `${searchParams.get('sortBy') ?? 'createdAt'}-${searchParams.get('sortOrder') ?? 'desc'}`

    const handleSortChange = (value: string) => {
        const [sortBy, sortOrder] = value.split('-')

        const params = new URLSearchParams(searchParams.toString())
        params.set('sortBy', sortBy)
        params.set('sortOrder', sortOrder)

        router.replace(`${path}?${params.toString()}`)
    }

    return (
        <div>
            <Field>
                <FieldLabel>Sort by</FieldLabel>
                <Select value={currentValue} onValueChange={handleSortChange}>
                    <SelectTrigger className="w-full sm:w-56">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Sort By</SelectLabel>
                            {SORT_OPTIONS.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                    {opt.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </Field>
        </div>
    )
}

export default ServicesFilter