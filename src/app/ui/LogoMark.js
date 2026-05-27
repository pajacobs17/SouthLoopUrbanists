import Image from 'next/image'

export default function LogoMark() {
  return (
    <Image
      src="/assets/img/logo.png"
      width={40}
      height={40}
      alt="South Loop Urbanists Logo"
    />
  )
}
