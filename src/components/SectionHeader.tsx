interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  labelClassName?: string;
  titleClassName?: string;
}

const SectionHeader = ({ label, title, subtitle, centered = false, labelClassName = "", titleClassName = "" }: SectionHeaderProps) => (
  <div className={centered ? "text-center mb-12" : "mb-12"}>
    <span className={`font-body text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-3 block ${labelClassName}`}>
      {label}
    </span>
    <h2 className={`font-display text-[clamp(28px,4vw,46px)] font-bold text-charcoal mb-4 ${centered ? "mx-auto" : ""} ${titleClassName}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-base text-muted-foreground font-light max-w-[500px] ${centered ? "mx-auto" : ""}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
