import React from "react";

const PostOfficeCard = ({postOffice}) => {
  // console.log(postOffice);
  return (
    <div className="border-2 border-black shadow-md min-w-[300px]">
      {!postOffice ? (
        <p>Loading...</p>
      ) : (
        <table className="m-2">
          <tbody>
            <tr>
              <td className="py-1 px-2">Name</td>
              <td className="py-1 px-2">{postOffice.Name}</td>
            </tr>
            <tr>
              <td className="py-1 px-2">BranchType</td>
              <td className="py-1 px-2">{postOffice.BranchType}</td>
            </tr>
            <tr>
              <td className="py-1 px-2">DeliveryStatus</td>
              <td className="py-1 px-2">{postOffice.DeliveryStatus}</td>
            </tr>
            <tr>
              <td className="py-1 px-2">District</td>
              <td className="py-1 px-2">{postOffice.District}</td>
            </tr>
            <tr>
              <td className="py-1 px-2">Division</td>
              <td className="py-1 px-2">{postOffice.Division}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PostOfficeCard;
