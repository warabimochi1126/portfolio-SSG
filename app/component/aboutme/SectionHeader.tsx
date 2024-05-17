interface SectionHeaderProps {
  children: string;
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className="mt-10 font-bold text-2xl mb-1">
      { children }
    </h2>
  )
}