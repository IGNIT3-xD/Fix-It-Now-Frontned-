'use client'
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
import { useForm } from 'react-hook-form';
import { loginAction } from "../_actions/auth.action";
import { toast } from "sonner";
import { LoginFormValues, loginSchema } from "@/lib/validations/auth";
import { zodResolver } from '@hookform/resolvers/zod';
export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = async (data: LoginFormValues) => {
        const formData = new FormData()

        formData.append("email", data.email);
        formData.append("password", data.password);

        const result = await loginAction(formData)

        if (result?.success === false) {
            toast.error(result.message)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold font-[raleway]">Login to your account</h1>
                    <p className="font-[manrope] text-sm text-balance text-muted-foreground">
                        Fill in the form below to create your account
                    </p>
                </div>
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
                    {
                        errors.password && (
                            <FieldDescription className="text-destructive">
                                {errors.password.message}
                            </FieldDescription>
                        )
                    }
                </Field>
                <Field>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Logging in...' : 'Login'}
                    </Button>
                </Field>
                <Field>
                    <FieldDescription className="px-6 text-center">
                        Didn&apos;t have an account? <Link href="/auth/register">Signup</Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    )
}
