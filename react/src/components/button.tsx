interface ButtonProps {
  text?: string
}

export function Button(props: ButtonProps){
  return(
    <button className="bg-violet-500 px-5 py-2 bg- rounded-sm">{props.text || 'Enviar'}</button>
  )
}