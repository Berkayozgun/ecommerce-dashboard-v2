import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  HelpCircle,
  BookOpen,
  MessageCircle,
  LifeBuoy,
  Search,
  ChevronDown
} from "lucide-react"
import { Input } from "@/components/ui/input"

const faqs = [
  {
    question: "How do I add a new product?",
    answer: "To add a new product, go to the 'Products' section in your dashboard and click on 'Add Product'. Fill in the required details and save."
  },
  {
    question: "How can I track my orders?",
    answer: "You can track your orders from the 'Orders' section. Here, you can see the status of each order and manage them accordingly."
  },
  {
    question: "How can I manage my inventory?",
    answer: "You can manage your inventory from the 'Inventory' section. Here, you can update stock levels and receive notifications for low stock."
  },
];

export function Help() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Help Center</h2>
        <p className="text-muted-foreground">Find answers to your questions and learn how to master the management hub.</p>
      </div>

      <div className="relative max-w-2xl">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search for articles, guides, or FAQs..." className="pl-10 h-12 text-lg shadow-sm" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="hover:bg-muted/50 cursor-pointer transition-colors bg-card">
          <CardHeader>
            <BookOpen className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-lg">Documentation</CardTitle>
            <CardDescription>Comprehensive guides on every feature of the hub.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:bg-muted/50 cursor-pointer transition-colors bg-card">
          <CardHeader>
            <MessageCircle className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-lg">Community</CardTitle>
            <CardDescription>Join our forum to discuss trends and tips with other users.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:bg-muted/50 cursor-pointer transition-colors bg-card">
          <CardHeader>
            <LifeBuoy className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-lg">Direct Support</CardTitle>
            <CardDescription>Can't find what you need? Open a support ticket.</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <HelpCircle className="h-5 w-5" />
          Frequently Asked Questions
        </h3>
        <div className="grid gap-2">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-none shadow-none bg-muted/30">
              <button
                className="w-full text-left p-4 font-semibold flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <CardContent className="pt-0 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Help;
