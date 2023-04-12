import { Npm } from "@global/components/icons"

type Props = {
    href: string
}

export const NpmLink = ({ href }: Props) => {
    return (
        <Npm width={16} height={16} />
    )
}