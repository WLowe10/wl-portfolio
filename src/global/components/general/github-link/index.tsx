import { Github } from "@global/components/icons"

type Props = {
    href: string
}

export const GithubLink = ({ href }: Props) => {
    return (
        <Github width={16} height={16} />
    )
}