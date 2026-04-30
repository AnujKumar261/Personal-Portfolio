import { Container } from './styles'
import { useState } from 'react'
import validator from 'validator'
import { toast } from 'react-toastify'

export function Form() {
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [validEmail, setValidEmail] = useState<boolean>(false)

  const verifyEmail = (value: string) => {
    setEmail(value)
    setValidEmail(validator.isEmail(value))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validEmail || !message.trim()) {
      toast.error('Please enter valid details')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('https://formspree.io/f/mdabogdz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          message,
        }),
      })

      if (res.ok) {
        toast.success('Message sent successfully!', {
          position: 'bottom-left',
          autoClose: 3000,
          theme: 'colored',
        })

        setEmail('')
        setMessage('')
        setValidEmail(false)
      } else {
        toast.error('Failed to send message')
      }
    } catch {
      toast.error('Something went wrong')
    }

    setLoading(false)
  }

  return (
    <Container>
      <h2>Get in touch</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => verifyEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </Container>
  )
}