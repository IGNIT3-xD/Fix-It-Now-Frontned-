"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerInputProps = {
    date?: Date;
    onDateChange: (date?: Date) => void;
};

function formatDate(date: Date | undefined) {
    if (!date) return "";

    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

export function DatePickerInput({
    date,
    onDateChange,
}: DatePickerInputProps) {
    const [open, setOpen] = React.useState(false);
    const [month, setMonth] = React.useState<Date | undefined>(date);

    return (
        <Field>
            <FieldLabel htmlFor="date-required">Schedule Date</FieldLabel>

            <InputGroup>
                <InputGroupInput
                    id="date-required"
                    readOnly
                    value={formatDate(date)}
                    placeholder="Select a booking date"
                    onKeyDown={(e) => {
                        if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setOpen(true);
                        }
                    }}
                />

                {/* Submitted with the form */}
                <input
                    type="hidden"
                    name="scheduledAt"
                    value={date ? date.toISOString().split("T")[0] : ""}
                />

                <InputGroupAddon align="inline-end">
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <InputGroupButton
                                id="date-picker"
                                variant="ghost"
                                size="icon-xs"
                                aria-label="Select date"
                            >
                                <CalendarIcon />
                                <span className="sr-only">Select date</span>
                            </InputGroupButton>
                        </PopoverTrigger>

                        <PopoverContent
                            className="w-auto overflow-hidden p-0"
                            align="end"
                            alignOffset={-8}
                            sideOffset={10}
                        >
                            <Calendar
                                mode="single"
                                selected={date}
                                month={month}
                                onMonthChange={setMonth}
                                disabled={(date) =>
                                    date < new Date(new Date().setHours(0, 0, 0, 0))
                                }
                                onSelect={(selectedDate) => {
                                    onDateChange(selectedDate);

                                    // Keep the calendar focused on the selected month
                                    if (selectedDate) {
                                        setMonth(selectedDate);
                                    }

                                    setOpen(false);
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                </InputGroupAddon>
            </InputGroup>
        </Field>
    );
}