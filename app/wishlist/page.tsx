"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/lib/i18n/useTranslations";
import { useStore } from "@/lib/store/StoreProvider";

export default function WishlistPage() {
  const { t, locale } = useTranslations();
  const { wishlist, removeFromWishlist, addToCart } = useStore();

  const isRTL = locale === "ar";

  const handleMoveToCart = (product: (typeof wishlist)[0]) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <main
      className="min-h-screen bg-background pt-24 pb-16"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium">
              {t("wishlist.title")}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            {t("wishlist.heading")}
          </h1>
          <p className="text-muted-foreground">
            {wishlist.length} {t("wishlist.items")}
          </p>
        </motion.div>

        {wishlist.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-muted/30 rounded-full flex items-center justify-center">
              <Heart className="w-12 h-12 text-muted-foreground/50" />
            </div>
            <h2 className="text-2xl font-serif text-foreground mb-4">
              {t("wishlist.empty")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t("wishlist.emptyDesc")}
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-background rounded-full font-medium hover:bg-gold/90 transition-colors"
            >
              {t("wishlist.browseProducts")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card/50 backdrop-blur rounded-2xl border border-border/30 overflow-hidden"
              >
                <div className="relative aspect-square bg-accent/30">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />

                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-3 right-3 w-10 h-10 bg-background/80 backdrop-blur rounded-full flex items-center justify-center text-destructive hover:bg-destructive hover:text-background transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6">
                  <Link href={`/shop/${product.slug}`}>
                    <h3 className="text-lg font-serif text-foreground mb-2 hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-serif text-foreground">
                      €{product.price}
                    </span>
                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="flex items-center gap-2 px-4 py-2 bg-gold text-background rounded-full text-sm font-medium hover:bg-gold/90 transition-colors"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      {t("wishlist.addToCart")}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
