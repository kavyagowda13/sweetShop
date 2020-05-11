
export const appRoutes=[
    {
        path:'',
        redirectTo:'category',
        pathMatch:'full'
    },
    {
        path:'category',
        loadChildren:'./pages/category/category.module#CategoryModule'
    },
    {
        path:'product',
        loadChildren:'./pages/product/product.module#ProductModule'
    },
    {
        path:'cart',
        loadChildren:'./pages/cart/cart-page.module#CartPageModule'
		},
		{
			path:'productcard',
			loadChildren:'./pages/productcard/productcard.module#ProductCardsModule'
	  },
    {
        path:'**',
        loadChildren:'./pages/category/category.module#CategoryModule'
    }
];
