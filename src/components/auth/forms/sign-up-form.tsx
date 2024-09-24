"use client";

import React from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp } from "@/actions/auth/sign-up";
import { SignUpFormValues, SignUpSchema } from "@/schemas";
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

export function SignUpForm() {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | undefined>("");
  const [success, setSuccess] = React.useState<string | undefined>("");

  const signUpForm = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: SignUpFormValues) => {
    startTransition(() => {
      toast.promise(signUp(values), {
        loading: "Creating account...",
        success: (response) => {
          if (response.error) {
            return response.error;
          }
          signUpForm.reset();
          return response.success || "Account created successfully!";
        },
        error: (err) => err.message || "Something went wrong.",
        finally: () => {
          setTimeout(() => {
            router.push("/auth/sign-in");
          }, 2000);
        },
      });
    });
  };

  return (
    <div className="flex w-full max-w-md flex-col space-y-6">
      <div className="flex flex-col space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h2>
        <p className="text-sm text-muted-foreground">
          Enter your details to create an account.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Form {...signUpForm}>
          <form
            className="flex w-full flex-col space-y-4"
            id="sign-up-form"
            onSubmit={signUpForm.handleSubmit(onSubmit)}
          >
            <FormField
              control={signUpForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Full name"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={signUpForm.control}
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
              control={signUpForm.control}
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
                </FormItem>
              )}
            />

            <FormField
              control={signUpForm.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="•••••••••"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
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
              Sign up
            </Button>
          </form>
        </Form>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">
          Already have an account? <Link href="/auth/sign-in">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
