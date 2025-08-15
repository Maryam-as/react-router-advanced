import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <PageContent title="An error occurred!">
        <p>Something went wrong!</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
