<script setup>
import { VPTeamMembers } from 'vitepress/theme'
const members = [
  {
    avatar: 'https://blog.wjsphy.tk/medias/avatar.png',
    name: 'WJS',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/wjsoj' }
    ]
  }
]
</script>

<VPTeamMembers size="small" :members="members" />

<br>
<br>

# 关于我

还没想好要写点啥...