<template>
  <div>
    <NavBar />
    <div class="container mt-6 pt-5">
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
