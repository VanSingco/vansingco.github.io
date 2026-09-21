<script setup lang="ts">
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'
import { toast } from 'vue-sonner'
import { Github, Loader2, Mail, Phone, Send } from '@/components/icons'

import SectionHeading from '@/components/SectionHeading.vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { contact, emailjsConfig, site } from '@/data/site'

const channels = [
  { icon: Github, label: 'GitHub', value: contact.githubHandle, href: contact.github, external: true },
  { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}`, external: false },
  { icon: Phone, label: 'Phone', value: contact.phone, href: contact.phoneHref, external: false }
]

const loading = ref(false)

function emptyForm() {
  return { from_name: '', to_name: site.name, email: '', message: '' }
}

const form = reactive(emptyForm())

async function sendEmail() {
  if (loading.value) return
  loading.value = true

  try {
    await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, { ...form }, {
      publicKey: emailjsConfig.publicKey
    })
    Object.assign(form, emptyForm())
    toast.success('Message sent', {
      description: "Thanks for reaching out — I'll get back to you soon."
    })
  } catch (error) {
    console.error('EmailJS send failed', error)
    toast.error('Something went wrong', {
      description: `Please try again, or email me directly at ${contact.email}.`
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contact" class="scroll-mt-28 px-4 py-20 sm:py-28">
    <div class="mx-auto max-w-6xl">
      <SectionHeading
        index="05"
        eyebrow="Hire Me"
        title="Let's build something"
        description="Got a project, a role, or just a question? Send it over and I'll reply."
      />

      <div class="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div class="space-y-3">
          <a
            v-for="(channel, index) in channels"
            :key="channel.label"
            v-reveal="index * 70"
            :href="channel.href"
            :target="channel.external ? '_blank' : undefined"
            :rel="channel.external ? 'noopener noreferrer' : undefined"
            class="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-accent/40"
          >
            <span
              class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary"
            >
              <component :is="channel.icon" class="size-5" />
            </span>
            <span class="min-w-0">
              <span class="block text-xs uppercase tracking-wider text-muted-foreground">
                {{ channel.label }}
              </span>
              <span class="block truncate text-sm font-medium">{{ channel.value }}</span>
            </span>
          </a>
        </div>

        <Card v-reveal="120">
          <CardContent class="p-6 sm:p-8">
            <form class="space-y-5" @submit.prevent="sendEmail">
              <div class="grid gap-5 sm:grid-cols-2">
                <div class="space-y-2">
                  <Label for="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    v-model="form.from_name"
                    required
                    autocomplete="name"
                    placeholder="Your name"
                  />
                </div>
                <div class="space-y-2">
                  <Label for="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    v-model="form.email"
                    type="email"
                    required
                    autocomplete="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <Label for="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  v-model="form.message"
                  required
                  rows="6"
                  placeholder="What are you working on?"
                />
              </div>

              <Button type="submit" size="lg" class="w-full" :disabled="loading">
                <Loader2 v-if="loading" class="size-4 animate-spin" />
                <Send v-else class="size-4" />
                {{ loading ? 'Sending…' : 'Send message' }}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
