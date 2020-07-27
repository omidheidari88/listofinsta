export const getCategories = () => {
	return {
		finance: 'مالی',
		management: 'مدیریت',
		accountant: 'حسابداری',
	};
};
export const getCategoryByKey = (key) => {
	const categories = getCategories();
	return categories[key];
};
