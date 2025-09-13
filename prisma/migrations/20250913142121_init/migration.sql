-- CreateTable
CREATE TABLE "public"."category" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "star_rating" DOUBLE PRECISION NOT NULL,
    "discount_rate" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."product_variant" (
    "id" SERIAL NOT NULL,
    "size" TEXT NOT NULL,
    "product_id" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "color_id" INTEGER NOT NULL,

    CONSTRAINT "product_variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."color" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."product_color_image" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "color_id" INTEGER NOT NULL,
    "image_path" TEXT NOT NULL,

    CONSTRAINT "product_color_image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "cpf" TEXT NOT NULL,
    "is_guest" BOOLEAN NOT NULL DEFAULT true,
    "full_name" TEXT,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "phone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."address" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "receiver_name" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."cart" (
    "id" TEXT NOT NULL,
    "user_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."cart_item" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "product_variant_id" INTEGER NOT NULL,
    "cart_id" TEXT NOT NULL,

    CONSTRAINT "cart_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."melhor_envio_cart" (
    "id" TEXT NOT NULL,
    "cart_id" TEXT NOT NULL,
    "protocol" TEXT,
    "service_id" INTEGER NOT NULL,
    "agency_id" INTEGER,
    "contract" TEXT,
    "service_code" TEXT,
    "quote" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "coupon" TEXT,
    "discount" DOUBLE PRECISION,
    "delivery_min" INTEGER,
    "delivery_max" INTEGER,
    "status" TEXT NOT NULL,
    "reminder" TEXT,
    "insurance_value" DOUBLE PRECISION,
    "weight" DOUBLE PRECISION,
    "width" DOUBLE PRECISION,
    "height" DOUBLE PRECISION,
    "length" DOUBLE PRECISION,
    "diameter" DOUBLE PRECISION,
    "format" TEXT,
    "billed_weight" DOUBLE PRECISION,
    "receipt" BOOLEAN,
    "own_hand" BOOLEAN,
    "collect" BOOLEAN,
    "collect_scheduled_at" TIMESTAMP(3),
    "reverse" BOOLEAN,
    "non_commercial" BOOLEAN,
    "authorization_code" TEXT,
    "tracking" TEXT,
    "self_tracking" TEXT,
    "delivery_receipt" TEXT,
    "additional_info" TEXT,
    "cte_key" TEXT,
    "paid_at" TIMESTAMP(3),
    "generated_at" TIMESTAMP(3),
    "posted_at" TIMESTAMP(3),
    "delivered_at" TIMESTAMP(3),
    "canceled_at" TIMESTAMP(3),
    "suspended_at" TIMESTAMP(3),
    "expired_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "parse_pi_at" TIMESTAMP(3),
    "received_at" TIMESTAMP(3),
    "risk" BOOLEAN,

    CONSTRAINT "melhor_envio_cart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_slug_key" ON "public"."product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "product_variant_product_id_size_color_id_key" ON "public"."product_variant"("product_id", "size", "color_id");

-- CreateIndex
CREATE UNIQUE INDEX "product_color_image_product_id_color_id_image_path_key" ON "public"."product_color_image"("product_id", "color_id", "image_path");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_cpf_key" ON "public"."user"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "cart_item_product_variant_id_cart_id_key" ON "public"."cart_item"("product_variant_id", "cart_id");

-- CreateIndex
CREATE UNIQUE INDEX "melhor_envio_cart_cart_id_key" ON "public"."melhor_envio_cart"("cart_id");

-- AddForeignKey
ALTER TABLE "public"."product" ADD CONSTRAINT "product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."product_variant" ADD CONSTRAINT "product_variant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."product_variant" ADD CONSTRAINT "product_variant_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "public"."color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."product_color_image" ADD CONSTRAINT "product_color_image_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."product_color_image" ADD CONSTRAINT "product_color_image_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "public"."color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."address" ADD CONSTRAINT "address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cart_item" ADD CONSTRAINT "cart_item_product_variant_id_fkey" FOREIGN KEY ("product_variant_id") REFERENCES "public"."product_variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cart_item" ADD CONSTRAINT "cart_item_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "public"."cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."melhor_envio_cart" ADD CONSTRAINT "melhor_envio_cart_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "public"."cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
