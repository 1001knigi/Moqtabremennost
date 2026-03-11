"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, Truck } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { sendOrderEmail } from "@/app/actions/send-order-email"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Името трябва да е поне 2 символа.",
  }),
  phone: z.string().min(9, {
    message: "Телефонният номер трябва да е валиден.",
  }),
  address: z.string().min(10, {
    message: "Адресът трябва да е поне 10 символа.",
  }),
})

export function OrderForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    const result = await sendOrderEmail(values)
    setIsSubmitting(false)

    if (result.success) {
      toast({
        title: "Поръчката е приета!",
        description: "Ще се свържем с вас скоро за потвърждение.",
      })
      form.reset()
    } else {
      toast({
        variant: "destructive",
        title: "Опа! Нещо се обърка.",
        description: "Моля, опитайте отново по-късно.",
      })
    }
  }

  return (
    <section id="order-form" className="py-16 md:py-24 bg-card/50 rounded-2xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Поръчай своята книга
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Попълни данните по-долу и ще изпратим книгата с наложен платеж.
          </p>
        </div>
        <div className="mt-12 max-w-xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Име и Фамилия</FormLabel>
                    <FormControl>
                      <Input placeholder="Иван Иванов" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Телефон</FormLabel>
                    <FormControl>
                      <Input placeholder="0888123456" type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Адрес/Офис за доставка с Econt/Speedy и град/село</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="гр. София, офис на Еконт 'Младост 1', до поискване"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Truck className="h-5 w-5" />
                  <span>Ориентировъчна цена за доставка 3-4 евро</span>
                </div>
                <Button type="submit" size="lg" className="w-full font-bold text-lg px-8 py-7 rounded-full shadow-lg hover:shadow-xl transition-shadow" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isSubmitting ? 'Изпращане...' : 'Изпрати поръчката (11.99€ + доставка)'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
