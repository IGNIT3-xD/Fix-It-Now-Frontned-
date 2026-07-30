"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { SignupFormValues, signupSchema } from "@/lib/validations/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { signUpAction } from './../_actions/auth.action';

export function SignupForm({ className, ...props }: React.ComponentProps<"form">) {
    const { register, handleSubmit, control, setValue, formState: { errors, isSubmitting } } = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            role: "CUSTOMER",
            profilePicture: undefined
        }
    })

    const onSubmit = async (data: SignupFormValues) => {
        const formData = new FormData()

        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("role", data.role);

        const result = await signUpAction(formData)

        if (result?.success === false) {
            toast.error(result.message)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold font-[raleway]">Create your account</h1>
                    <p className="font-[manrope] text-sm text-balance text-muted-foreground">
                        Fill in the form below to create your account
                    </p>
                </div>
                <Field>
                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                    <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="bg-background"
                        {...register("name")}
                    />

                    {
                        errors.name && (
                            <FieldDescription className="text-destructive">
                                {errors.name.message}
                            </FieldDescription>
                        )
                    }
                </Field>
                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        className="bg-background"
                        {...register("email")}
                    />
                    {
                        errors.email && (
                            <FieldDescription className="text-destructive">
                                {errors.email.message}
                            </FieldDescription>
                        )
                    }
                </Field>
                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                        id="password"
                        type="password"
                        required
                        placeholder="*******"
                        className="bg-background"
                        {...register("password")}
                    />
                    <FieldDescription>
                        Must be at least 6 characters long.
                    </FieldDescription>

                    {
                        errors.password && (
                            <FieldDescription className="text-destructive">
                                {errors.password.message}
                            </FieldDescription>
                        )
                    }
                </Field>
                <Field>
                    <FieldLabel htmlFor="profilePicture">Upload your profile picture (Optional)</FieldLabel>
                    <Input
                        id="profilePicture"
                        type="file"
                        accept="image/png,image/jpeg,image/webp"
                        className="bg-background"
                        onChange={(e) => {
                            setValue("profilePicture",
                                e.target.files?.[0],
                                {
                                    shouldValidate: true
                                }
                            );
                        }}
                    />

                    {errors.profilePicture && (
                        <FieldDescription className="text-destructive">
                            {errors.profilePicture.message}
                        </FieldDescription>
                    )}
                </Field>
                <Controller
                    control={control}
                    name="role"
                    render={({ field }) => (
                        <Field>
                            <FieldLabel>Select your role</FieldLabel>

                            <Select
                                value={field.value}
                                onValueChange={field.onChange}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select your role" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Role</SelectLabel>

                                        <SelectItem value="CUSTOMER">
                                            Customer
                                        </SelectItem>

                                        <SelectItem value="TECHNICIAN">
                                            Technician
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {errors.role && (
                                <FieldDescription className="text-destructive">
                                    {errors.role.message}
                                </FieldDescription>
                            )}
                        </Field>
                    )}
                />
                <Field>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Creating..." : "Create Account"}
                    </Button>
                </Field>
                <Field>
                    <FieldDescription className="px-6 text-center">
                        Already have an account? <Link href="/auth/login">Login</Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    )
}
