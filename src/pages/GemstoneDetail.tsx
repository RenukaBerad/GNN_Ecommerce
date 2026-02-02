import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Sparkles, Shield, Users, Gem } from "lucide-react";
import { getGemstoneById } from "@/data/gemstones";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GemstoneDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const gemstone = getGemstoneById(id || "");

  if (!gemstone) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">
            Gemstone Not Found
          </h1>
          <Link to="/collection" className="text-primary hover:underline">
            Return to Collection
          </Link>
        </div>
      </div>
    );
  }

  const quickFacts = [
    { label: "Color", value: gemstone.color, icon: Gem },
    { label: "Hardness", value: gemstone.hardness, icon: Shield },
    { label: "Zodiac", value: gemstone.zodiac, icon: Sparkles },
    { label: "Chakra", value: gemstone.chakra, icon: Heart },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("/collection")}
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Collection</span>
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div
                className={`glass-card p-4 overflow-hidden transition-all duration-500 hover:${gemstone.glowClass}`}
              >
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={gemstone.image}
                    alt={gemstone.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="gem-tag">{gemstone.rarity}</span>
                  <span className="gem-tag">{gemstone.zodiac}</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
                  {gemstone.name}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {gemstone.meaning}
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="glass-card p-4"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <fact.icon className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {fact.label}
                      </span>
                    </div>
                    <p className="font-display text-lg text-foreground">
                      {fact.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                  Inquire About This Stone
                </button>
                <button className="px-8 py-4 rounded-full bg-secondary border border-border text-foreground font-medium text-lg hover:bg-muted transition-all duration-300">
                  Book Viewing
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Benefits
                </h3>
              </div>
              <ul className="space-y-4">
                {gemstone.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Who Should Wear */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Who Should Wear
                </h3>
              </div>
              <ul className="space-y-4">
                {gemstone.whoShouldWear.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Care Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Care Instructions
                </h3>
              </div>
              <ul className="space-y-4">
                {gemstone.careInstructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {instruction}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GemstoneDetail;
