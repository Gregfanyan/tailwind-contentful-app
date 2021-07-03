/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
export const FlexCenter = tw.div`flex justify-center`;
export const Heading = tw(FlexCenter)`text-blue-500 text-2xl p-2 uppercase`;
export const BigHeading = tw(Heading)`text-4xl`;
export const Container = tw.div`max-w-2xl mx-auto p-5 mt-1`;
export const CardContainer = tw(FlexCenter)`gap-10 w-full mr-8 p-6`;
export const Card = tw(
  FlexCenter
)`flex-col text-center shadow-2xl items-center w-1/2`;
export const Image = tw.img`w-3/4 h-2/4 rounded-2xl shadow-2xl`;
export const HeaderContainer = tw(
  FlexCenter
)`px-10 py-4 bg-gray-400 flex-row flex-nowrap items-start content-center uppercase`;
export const NavPage = tw.div`py-1 shadow-lg bg-gray-600 text-gray-200 rounded-lg m-1 w-20 text-center hover:bg-gray-700 cursor-pointer`;
export const Login = tw(NavPage)`ml-auto`;
