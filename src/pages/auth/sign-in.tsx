import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from 'react-hook-form'
import {z} from 'zod'

const signInForm = z.object({
    email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn(){
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>();

    async function handleSignIn(data: SignInForm) {
        console.log(data)
        await new Promise(resolve => setTimeout(resolve,2000))

    }
    
    return(
        <>
        <Helmet title="Login"/>
        <div className="p-8">
            <div className="w-[340px] flex flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tighter">Acessar Painel</h1>
                <p className="text-sm text-muted-foreground">
                    Acompanhe suas vendas pelo painel do parceiro
                </p>
                <form onSubmit={handleSubmit(handleSignIn)}className="space-y-4">
                    <div className="space-y-2">
                        <Label className="flex font-semibold" htmlFor="email">Seu e-mail</Label>
                        <Input id="email" type="email" {...register('email')}></Input>
                    </div>
                    <Button disabled={isSubmitting} className="w-full" type="submit">Acessar Painel</Button>

                </form>
                </div>

            </div>
        </div>
        </>
    )
}