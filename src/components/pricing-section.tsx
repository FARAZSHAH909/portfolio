import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface PricingFeatureProps {
  feature: string;
  included: boolean;
}

const PricingFeature = ({ feature, included }: PricingFeatureProps) => {
  return (
    <div className="flex items-center gap-2 py-1.5">
      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${included ? 'bg-pink' : 'bg-zinc-700'}`}>
        {included ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
      </div>
      <span className={`text-sm ${included ? 'text-white' : 'text-zinc-500'}`}>{feature}</span>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  popular?: boolean;
  features: {
    feature: string;
    included: boolean;
  }[];
}

const PricingCard = ({ title, price, popular, features }: PricingCardProps) => {
  return (
    <Card className={`bg-dark-lighter border-none rounded-xl overflow-hidden ${popular ? 'ring-2 ring-pink' : ''}`}>
      {popular && (
        <div className="bg-pink text-white text-xs font-medium py-1 px-3 absolute right-4 top-4 rounded-full">
          Popular
        </div>
      )}
      <CardHeader className="pt-8 pb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex items-end gap-1 mt-4">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="text-zinc-500 text-sm mb-1">/mo</span>
        </div>
      </CardHeader>

      <CardContent className="py-4">
        <div className="space-y-1">
          {features.map((feature, index) => (
            <PricingFeature
              key={`${feature.feature}-${index}`}
              feature={feature.feature}
              included={feature.included}
            />
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-4 pb-8 flex flex-col">
        <Button className={`w-full ${popular ? 'bg-pink hover:bg-pink/90' : 'bg-dark hover:bg-dark/90'}`}>
          Purchase Now
        </Button>
        <span className="text-xs text-zinc-500 mt-3 text-center">
          14 Days Money Back Guarantee
        </span>
      </CardFooter>
    </Card>
  );
};

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient mb-4">My Pricing</h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex rounded-full bg-dark p-1 shadow-inner">
            <button className="py-2 px-6 rounded-full bg-dark-lighter text-white text-sm">Monthly</button>
            <button className="py-2 px-6 rounded-full text-zinc-400 text-sm">Yearly</button>
            <button className="py-2 px-6 rounded-full text-zinc-400 text-sm">Lifetime</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard
            title="Make Your Single Page"
            price="30.00"
            features={[
              { feature: "1 Page with Elementor", included: true },
              { feature: "Design Customization", included: true },
              { feature: "Responsive Design", included: true },
              { feature: "Content Upload", included: true },
              { feature: "Design Customization", included: true },
              { feature: "2 Plugins/Extensions", included: true },
              { feature: "Multipage Elementor", included: false },
              { feature: "Design Figure", included: false },
              { feature: "Maintenance", included: false },
              { feature: "Content Upload", included: false },
              { feature: "Design With XD", included: false },
              { feature: "8 Plugins/Extensions", included: false }
            ]}
          />

          <PricingCard
            title="Design Make Your Landing Page"
            price="50.00"
            popular={true}
            features={[
              { feature: "1 Page with Elementor", included: true },
              { feature: "Design Customization", included: true },
              { feature: "Responsive Design", included: true },
              { feature: "Content Upload", included: true },
              { feature: "Design Customization", included: true },
              { feature: "2 Plugins/Extensions", included: true },
              { feature: "Multipage Elementor", included: true },
              { feature: "Design Figure", included: true },
              { feature: "Maintenance", included: false },
              { feature: "Content Upload", included: false },
              { feature: "Design With XD", included: false },
              { feature: "8 Plugins/Extensions", included: false }
            ]}
          />

          <PricingCard
            title="Customize Your Single Page"
            price="90.00"
            features={[
              { feature: "1 Page with Elementor", included: true },
              { feature: "Design Customization", included: true },
              { feature: "Responsive Design", included: true },
              { feature: "Content Upload", included: true },
              { feature: "Design Customization", included: true },
              { feature: "2 Plugins/Extensions", included: true },
              { feature: "Multipage Elementor", included: true },
              { feature: "Design Figure", included: true },
              { feature: "Maintenance", included: true },
              { feature: "Content Upload", included: true },
              { feature: "Design With XD", included: true },
              { feature: "8 Plugins/Extensions", included: true }
            ]}
          />
        </div>
      </div>
    </section>
  );
}
