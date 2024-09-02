"use client";
import { usePathname, useRouter } from '@/i18n/routing';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { SUPPORTED_LANGUAGES } from '@/i18n';

export default function LocaleSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const onLocaleChange = (value: string) => {
        router.push(pathname, { locale: value });
    }

    return (
        <div className="mt-5 md:w-80">
            <Select
                onValueChange={onLocaleChange}
            >
                  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Language" />
  </SelectTrigger>
  <SelectContent>
                {SUPPORTED_LANGUAGES.map((lang) => (
                    <SelectItem key={lang} value={lang}>
                        {lang}
                    </SelectItem>
                ))}
                </SelectContent>
            </Select>
        </div>
    )
}