module.exports = {
	env: {
		browser: true,
		// es2021: true,
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'airbnb-base',
		'plugin:prettier/recommended' // 添加 prettier 插件
	],
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		/**
		 * exact rules via rjx
		 */
		'react/display-name': 0, // antd表格的【column|render】会被eslint认定为组件然后说你没有定义【displayName】 报错（ ESLint cannot recognize the render prop pattern ）
		// 'no-param-reassign': [
		//   'error',
		//   {
		//     props: true,
		//     ignorePropertyModificationsFor: ['item', 'res', 'record'],
		//   },
		// ], // eslint不希望我们直接去改变函数的参数, 这里加个白名单
		'no-param-reassign': 0, // 算了直接禁掉吧 太多了~
		'jsx-a11y/click-events-have-key-events': 0, // eslint的交互标准->onClick必须也可以用键盘操作~ 禁掉
		'jsx-a11y/no-static-element-interactions': 0, // esilint要求静态html标签必须有一个role属性~ 禁掉
		'react-hooks/exhaustive-deps': 0, // eslint会检测useEffect的依赖，关键非要我去依赖里面执行的函数~ 禁掉
		'react/jsx-props-no-spreading': 0, // eslint不准对象使用展开运算符~ 禁掉
		'react/require-default-props': 0, // 必须提供默认值（PropTypes）~ 禁掉
		'react/destructuring-assignment': 0, // 必须使用解构赋值~ 禁掉
		'unicorn/consistent-destructuring': 0, // 必须使用解构赋值~ 禁掉
		'no-unused-expressions': 0, // 禁止未使用的表达式（项目中主要是 【a && b+1】 这种 ）~ 禁掉
		'no-underscore-dangle': 0, // 禁止悬空下划线 （项目中主要是我个人习惯->辅助函数命名以_开头）~ 禁掉
		'no-shadow': 0, // 全局变量和局部变量不能同名~ （我觉得这个规则还好）~ 先禁掉
		'react/no-array-index-key': 0, // 循环时不能用index作为key，因为这样不能保证它的唯一性~ 禁掉
		'import/no-unresolved': 0, // alias路径 eslint没有遵循webpack的规则~ 先禁掉
		'import/extensions': 0, // 引用后缀名必须有~ 禁掉
		'vue/no-multiple-template-root': 0, // template里 第一层必须有标签~ 禁掉
		'import/no-extraneous-dependencies': 0 // 引入要严格区分-D -S~ 禁掉
	}
}
