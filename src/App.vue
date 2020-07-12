<template>
  <div>
    <NavBar />
    <div class="mt-6 pt-6 pl-3">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    NavBar,
    Footer,
  },
}
</script>
