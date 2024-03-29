import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { RegisterRestaurant } from "@/api/register-restaurant";

const signUpForm = z.object({
  email: z.string().email(),
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  const {mutateAsync: registerRestaurantFn} = useMutation({
    mutationFn: RegisterRestaurant,

  })

  async function handleSignUp(data: SignUpForm) {
    try {
      await registerRestaurantFn({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        email: data.email,
        phone: data.phone
      })
      toast.success("Restaurante cadastrado com sucesso.", {
        description: "Parabéns, agora você pode entrar",
        action: {
          label: "Fazer login",
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      });
    } catch {
      toast.error("Erro ao cadastrar restaurante");
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant={"outline"} asChild className="absolute right-8 top-8">
          <Link to="/sign-in" className="">
            Fazer login
          </Link>
        </Button>
        <div className="flex w-[340px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Crie sua conta gratuita
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
            <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
              <div className="space-y-2">
                <Label className="flex font-semibold" htmlFor="restaurantName">
                  Nome do Estabelecimento
                </Label>
                <Input
                  id="restaurantName"
                  type="text"
                  {...register("restaurantName")}
                />
              </div>

              <div className="space-y-2">
                <Label className="flex font-semibold" htmlFor="managerName">
                  Nome
                </Label>
                <Input
                  id="managerName"
                  type="text"
                  {...register("managerName")}
                />
              </div>

              <div className="space-y-2">
                <Label className="flex font-semibold" htmlFor="email">
                  E-mail
                </Label>
                <Input id="email" type="email" {...register("email")}></Input>
              </div>

              <div className="space-y-2">
                <Label className="flex font-semibold" htmlFor="phone">
                  Telefone
                </Label>
                <Input id="phone" type="tel" {...register("phone")}></Input>
              </div>

              <Button disabled={isSubmitting} className="w-full" type="submit">
                Finalizar Cadastro
              </Button>

              <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                Ao continuar, você concorda com nossos{" "}
                <a className="underline underline-offset-4" href="">
                  termos de serviço
                </a>{" "}
                e{" "}
                <a className="underline underline-offset-2" href="">
                  politicas de privacidade
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
