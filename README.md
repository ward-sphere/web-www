# www

New frontend. I decided to go for a single-page application in order to better modularize my code and learn something fun.

## Quick start

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Usage

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Docker

I will package built versions in master using Docker on a trunk-based level. Any dev builds will find their way to my dev domain, then to stage, and then so on. Once I have some additional framework down, I'll set up a build pipeline for merges into main, and have them managed by AWS EKS.

Docker commands:

Build

```bash
docker build -t web/www -t web/www:$(date +%Y.%m.%d).${BUILD} .
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 505499692157.dkr.ecr.us-east-2.amazonaws.com
docker tag web/www:$(date +%Y.%m.%d).${BUILD} 505499692157.dkr.ecr.us-east-2.amazonaws.com/web/www:$(date +%Y.%m.%d).${BUILD}
docker push 505499692157.dkr.ecr.us-east-2.amazonaws.com/web/www:$(date +%Y.%m.%d).${BUILD}
```

Run

```bash
docker run --rm -p 80:80 web/www
```

## References

* [Create React App](https://github.com/facebook/create-react-app)
* [mhucka/readmine](https://github.com/mhucka/readmine)
* [Organizing your CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Organizing)
