import { supabase } from '@/lib/supabaseClient'
import { useAuthStore } from '@/stores/auth'
import type { LoginForm, RegisterForm } from '@/types/AuthForm'

export const register = async (formData: RegisterForm) => {
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        username: formData.username,
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
    },
  })

  if (error) return console.error(error)

  if (data.user) {
    const { error: insertError } = await supabase.from('profiles').insert({
      id: data.user.id,
      username: formData.username,
      full_name: `${formData.firstName} ${formData.lastName}`,
    })

    if (insertError) return console.error('Error inserting profile', insertError)
  }

  return true
}

export const login = async (formData: LoginForm) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  })

  if (error) return { error }

  return { data }
}

export const logout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) return console.error(error)

  return true
}
