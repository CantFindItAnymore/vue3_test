<template>
	<div class="container">
		<div>computed:{{ double }}</div>
		v-on,v-bind:<img :src="data.src" @click="getImg" />
		<div>
			v-for:
			<span v-for="(item, index) in arr" :key="index">
				{{ item }}
			</span>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, onMounted, onActivated } from 'vue'
import { useStore } from 'vuex'
import axios from '@/utils/axios'

export default defineComponent({
	name: 'Home',

	// 初始化
	setup() {
		// data情形1： 对象类型
		const data = reactive({
			count: 1,
			src: ''
		})
		// data情形2： 非对象类型的数据（注意赋值时要用xxx.value）
		const arr = ref([1, 2, 3])

		// computed
		const double = computed(() => {
			return data.count * 2
		})

		// vuex
		const store = useStore()

		// methods
		const getImgSuc = (src: string) => {
			data.src = src
		}
		const getImg = () => {
			data.src = ''
			axios.get('https://dog.ceo/api/breeds/image/random').then((res: any) => {
				console.log(1, res.data.message)
				getImgSuc(res.data.message)
			})
		}

		// mounted
		onMounted(() => {
			getImg()
		})

		// active
		onActivated(() => {
			// getImg()
			console.log('active')
		})

		// 导出给模板用的数据
		return { data, arr, double, store, getImg }
	}
})
</script>

<style>
.container {
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
img {
	width: 500px;
	cursor: pointer;
	margin: 20px 0;
	border: 1px solid red;
}
</style>
