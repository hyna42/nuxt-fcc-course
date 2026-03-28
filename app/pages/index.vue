<script setup lang="ts">
////SEO/////
useHead({
  title: "Home Page",
  meta: [
    {
      name: "description",
      content:
        "page where you are going to find everything about this course of Nuxt.",
    },
  ],
  bodyAttrs: { class: "test" },
  script: [{ innerHTML: "console.log('Hello world')" }],
});

////SEO/////
const { sayHello } = useUtils();

const login = () => {
  console.log("hello");
  // navigateTo("/");
};

const { data: products, pending } = await useAsyncData("products", () =>
  $fetch("/api/products"),
);

console.log("products", products);

const refresh = () => refreshNuxtData("products");

// console.log("::res::",res)
</script>

<template>
  <div>
    <p class="">{{ pending ? "Loading" : products }}</p>
    <button @click="refresh" type="button">Refresh</button>
    <p class="text-3xl font-bold underline text-red-400">Home Page</p>
    <!-- <Alert/> -->
    <pre>{{ sayHello() }}</pre>
    <IconsBell />
    <div class="min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold mb-6 text-center">Connexion</h2>

        <form @submit.prevent="login">
          <div class="mb-4">
            <input
              type="email"
              placeholder="Email"
              class="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div class="mb-6">
            <input
              type="password"
              placeholder="Mot de passe"
              class="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
