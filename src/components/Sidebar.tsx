
import { Calendar, Home, Inbox, Search, Settings, Smartphone, Laptop, Tablet, Headphones, Filter } from 'lucide-react';
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedPriceRange: string;
  setSelectedPriceRange: (range: string) => void;
}

const categories = [
  { id: 'all', title: 'All Products', icon: Home },
  { id: 'smartphones', title: 'Smartphones', icon: Smartphone },
  { id: 'laptops', title: 'Laptops', icon: Laptop },
  { id: 'tablets', title: 'Tablets', icon: Tablet },
  { id: 'accessories', title: 'Accessories', icon: Headphones },
];

const priceRanges = [
  { id: 'all', title: 'All Prices' },
  { id: '0-100', title: 'Under $100' },
  { id: '100-500', title: '$100 - $500' },
  { id: '500-1000', title: '$500 - $1000' },
  { id: '1000+', title: '$1000+' },
];

export function Sidebar({ selectedCategory, setSelectedCategory, selectedPriceRange, setSelectedPriceRange }: SidebarProps) {
  return (
    <SidebarComponent className="border-r border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="p-4">
        <SidebarTrigger className="mb-4" />
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-700 font-semibold flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Categories
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category.id}>
                  <SidebarMenuButton 
                    asChild
                    isActive={selectedCategory === category.id}
                    className="hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <button 
                      onClick={() => setSelectedCategory(category.id)}
                      className="w-full text-left"
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-700 font-semibold">Price Range</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {priceRanges.map((range) => (
                <SidebarMenuItem key={range.id}>
                  <SidebarMenuButton 
                    asChild
                    isActive={selectedPriceRange === range.id}
                    className="hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    <button 
                      onClick={() => setSelectedPriceRange(range.id)}
                      className="w-full text-left"
                    >
                      <span>{range.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  );
}
