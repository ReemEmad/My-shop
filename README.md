#My Shop

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##Introduction

This project was made to offer an online shopping experience for visitors, offering wide range of products of different categories such as books, and clothes. 
The user can choose a category to view it's products.
The user can filter the products according to a price range, product color, and overall rating. 

This solution focuses on the front-end implementation of the shop.

##Technologies 

#React 17.0.2

I decided to choose React JS as the library to work with for two reasons, one is that it offers a lot of flexibility with it, you can customize your application and choose whatever ui libraries you're comfortable with, and two is because I worked with it a lot and I'm more confident with using it more than Angular for example. 

#Antd 4.16.13

I decided to use Antd since it offers an easy to use Api with a decent range of nice looking ui components that are compatible to use with React. 

#react-multi-carousel 2.6.5

I used this ui library to implement the category slider since it offers features that I needed and were not available in Antd's carousel component such as multi item carousel. 

#Axios 0.21.4

I use axios to make httpRequests, it offers a great Api with promise api support, intercepting requests and responses, automatic transformation for JSON data and the availability to cancel requests.

#qs 

I used qs because it allows you to create nested objects within your query strings

#Context API 

I decided to use context API to handle state management in my application since it's easy to use,
comparatively less complex than Redux, has concise and easy to maintain code and very reusable.


#Future Work

-First step I'd do If I'm given more time is to improve the UI, scour different e commerce web sites and have some inspiration on the UI in general.
-Second thing would be to add a quick view feature for each product, a pop up for example that opens with the product's full details such as description, available colors and sizes, and also a zoom in feature.
-I'd also like to add a pagination feature for the products, distribute the products on multiple pages or load more products on scroll to minimize the overhead time.
-Also I'd improve upon the UX such that there are loaders everytime the user clicks any filter, and maybe display a welcome message on initial load.
-I'd like to organize my commit messages properly in the future, commit and push each new feature/bug fix as soon as i do them.

##Launch

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

