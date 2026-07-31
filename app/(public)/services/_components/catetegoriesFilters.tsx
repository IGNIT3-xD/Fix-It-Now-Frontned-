'use client'

import { Field, FieldLabel } from '@/components/ui/field';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const CATEGORIES = [
    { value: 'PAINTING', label: 'Painting' },
    { value: 'PLUBMING', label: 'Plumbing' },
    { value: 'CLEANING', label: 'Cleaning' },
    { value: 'ELECTRICS', label: 'Eltrics' },
    { value: 'REPAIRING', label: 'Repairing' }
]

const ALL_VALUE = 'all'

const CatetegoriesFilters = () => {
    const path = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    const currentValue = searchParams.get('category') ?? ALL_VALUE

    const handleCategoryChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString())

        if (value === ALL_VALUE) {
            params.delete('category')
        } else {
            params.set('category', value)
        }

        router.replace(`${path}?${params.toString()}`)
    }

    return (
        <div>
            <Field>
                <FieldLabel>Filter by category</FieldLabel>
                <Select value={currentValue} onValueChange={handleCategoryChange}>
                    <SelectTrigger className="w-full sm:w-56">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Filter By</SelectLabel>
                            <SelectItem value={ALL_VALUE}>All Categories</SelectItem>
                            {CATEGORIES.map((opt) => (
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

export default CatetegoriesFilters