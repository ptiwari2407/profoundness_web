// Define the benefit item interface
export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
  iconBgColor: string;
  iconTextColor: string;
}

// Define the component props
export interface BenefitsBannerProps {
  title: string;
  subtitle: string;
  benefits: BenefitItem[];
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
}

// Default props
export const defaultBenefitsBannerProps: Partial<BenefitsBannerProps> = {
  containerClass: "pt-10 pb-[1.125rem] bg-white dark:bg-gray-900",
  titleClass: "text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3 leading-tight",
  subtitleClass: "text-lg text-gray-600 dark:text-gray-300 mt-2 leading-normal max-w-4xl mx-auto"
};
