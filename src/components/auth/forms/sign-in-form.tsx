"use client";

import React from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { login } from "@/actions/auth/sign-in";
import { SignInFormValues, SignInSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

export function SignInForm() {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const [redirect, setRedirect] = React.useState<string | undefined>("");

  const signInForm = useForm<SignInFormValues>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignInFormValues) => {
    startTransition(() => {
      toast.promise(login(values), {
        loading: "Signing in...",
        success: (response) => {
          if (response.error) {
            return response.error;
          }
          router.push(response.redirect?.toString() || "/");
          signInForm.reset();
          setRedirect(response.redirect);

          return "Signed in successfully!";
        },
        error: (err) => err.message || "Something went wrong.",
      });
    });
  };
  return (
    <div className="flex w-full max-w-md flex-col space-y-4">
      <div className="flex flex-col space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">
          Sign in to your account
        </h2>
        <p className="text-sm text-muted-foreground">
          Enter your email and password to sign in to your account.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Form {...signInForm}>
          <form
            className="flex w-full flex-col space-y-4"
            id="sign-in-form"
            onSubmit={signInForm.handleSubmit(onSubmit)}
          >
            <FormField
              control={signInForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="name@example.com"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={signInForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="•••••••••"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                  <Button asChild variant="link" size="sm" className="px-0">
                    <Link href="/auth/forgot-password">Forgot password?</Link>
                  </Button>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              variant="green"
              disabled={isPending}
            >
              {isPending ? <Spinner className="mr-2" /> : null}
              Sign in
            </Button>
          </form>
        </Form>
      </div>

      <div className="mt-4 flex justify-start gap-x-1 text-sm text-muted-foreground">
        <p>{"New to MealMap?"}</p>
        <Link
          href="/auth/sign-up"
          className="cursor-pointer font-medium text-primary underline-offset-4 hover:underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
