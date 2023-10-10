import { Link, useNavigation } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { reset } = form;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setTimeout(() => {
      console.log(values);
      reset();
    }, 2000);
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
          className="card w-96 p-8 bg-base-1000 shadow-lg flex flex-col gap-y-4 "
        >
          <h4 className="text-center text-3xl font-semibold text-blue-600">
            Login
          </h4>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      name="password"
                      type="password"
                      placeholder="Secure password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="mt-4 flex flex-col gap-3">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Submit"
              )}
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                reset();
              }}
            >
              Reset form
            </Button>
          </div>
          <p className="text-center mt-4 text-sm font-medium">
            Not a member yet?
            <Link to="/register">
              <Button variant="link" className="text-blue-500">
                Register
              </Button>
            </Link>
          </p>
        </form>
      </Form>
    </section>
  );
};
export default Login;
