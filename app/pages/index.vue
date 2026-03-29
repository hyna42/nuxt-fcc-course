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

const isOpen = ref(false);

const handleModal = (e: MouseEvent) => {
  isOpen.value = !isOpen.value;
  console.log("isOpen", !isOpen);
};

const cancel = () => {
  isOpen.value = false;
};
</script>

<template>
  <div>
    <Modal @click="handleModal">
      <template #label></template>
      <template #body>
        <dialog :open="isOpen">
          <article>
            <h2>Confirm Your Membership</h2>
            <p>
              Thank you for signing up for a membership! Please review the
              membership details below:
            </p>
            <ul>
              <li>Membership: Individual</li>
              <li>Price: $10</li>
            </ul>
            <footer>
              <button class="secondary" @click="cancel">Cancel</button>
              <button>Confirm</button>
            </footer>
          </article>
        </dialog>
      </template>

      >
    </Modal>
  </div>
</template>
