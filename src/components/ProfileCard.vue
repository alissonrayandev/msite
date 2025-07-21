<template>
  <div class="profile-card">
    <img :src="require('@/assets/profile.png')" alt="Profile Picture" class="profile-img"/>
    <h1>{{ $t('name') }}</h1>
    <p class="role">{{ $t('role') }}</p>
    <p class="description">{{ $t('description') }}</p>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/milenasaldini/" target="_blank" class="social-icon" :aria-label="$t('linkedin')" :title="$t('linkedin')"><i class="fab fa-linkedin"></i></a>
      <a href="https://behance.net/milenasaldini" target="_blank" class="social-icon" :aria-label="$t('behance')" :title="$t('behance')"><i class="fab fa-behance"></i></a>
      <a href="mailto:milenasaldini.designer@gmail.com" class="social-icon" :aria-label="$t('email')" :title="$t('email')"><i class="fas fa-envelope"></i></a>
      <a href="https://wa.me/5511913143362" target="_blank" class="social-icon" :aria-label="$t('whatsapp')" :title="$t('whatsapp')"><i class="fab fa-whatsapp"></i></a>
      <a href="/CV_Milena.pdf" download class="social-icon" :aria-label="$t('downloadCV')" :title="$t('downloadCV')"><i class="fas fa-download"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard'
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.profile-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  color: var(--text-color);
  max-width: 520px;
  margin: 16px;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  z-index: 100;
}

.profile-card:hover {
  transform: translateY(-8px);
}

.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 16px;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.2);
}

h1 {
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: 600;
}

.role {
  font-size: 18px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 16px;
}

.description {
  font-size: 14px;
  margin-bottom: 32px;
  color: var(--text-color);
  text-align: center;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.social-icon {
  color: var(--text-color);
  font-size: 24px;
  transition: color 0.3s, transform 0.3s;
}

.social-icon:hover {
  color: #1da1f2;
  transform: scale(1.2);
}
</style>
