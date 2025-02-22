import { ArrowRight, Copy, Mail } from 'lucide-react'

import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { IconButton } from '../components/icon-button'

export default function Home() {
  return (
    <main>
      <Button type="submit">
        NLW
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail className="size-5" />
          </InputIcon>

          <InputField placeholder="E-mail" />
        </InputRoot>
      </div>
    </main>
  )
}
