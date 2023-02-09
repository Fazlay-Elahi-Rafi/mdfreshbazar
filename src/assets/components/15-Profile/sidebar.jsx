import React from "react";

import { MdDashboardCustomize } from "react-icons/md";
import { BiLock, BiEdit } from "react-icons/bi";
import { FiShoppingBag, FiHeart, FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  return (
    <>
      <div
        className="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          className="nav-link active profile__sidebar-btn"
          id="v-pills-dashboard-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-dashboard"
          type="button"
          role="tab"
          aria-controls="v-pills-dashboard"
          aria-selected="true"
        >
          <MdDashboardCustomize className="profile__sidebar-btn--i" />
          dashboard
        </button>
        <button
          className="nav-link profile__sidebar-btn"
          id="v-pills-edit-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-edit"
          type="button"
          role="tab"
          aria-controls="v-pills-edit"
          aria-selected="false"
        >
          <BiEdit className="profile__sidebar-btn--i" />
          edit profile
        </button>
        <button
          className="nav-link profile__sidebar-btn"
          id="v-pills-wishlist-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-wishlist"
          type="button"
          role="tab"
          aria-controls="v-pills-wishlist"
          aria-selected="false"
        >
          <FiHeart className="profile__sidebar-btn--i" />
          wishlist
        </button>
        <button
          className="nav-link profile__sidebar-btn"
          id="v-pills-order-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-order"
          type="button"
          role="tab"
          aria-controls="v-pills-order"
          aria-selected="false"
        >
          <FiShoppingBag className="profile__sidebar-btn--i" />
          recent order
        </button>
        <button
          className="nav-link profile__sidebar-btn"
          id="v-pills-password-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-password"
          type="button"
          role="tab"
          aria-controls="v-pills-password"
          aria-selected="false"
        >
          <BiLock className="profile__sidebar-btn--i" />
          change password
        </button>
        <button className="nav-link profile__sidebar-btn" type="button">
          <FiLogOut className="profile__sidebar-btn--i" />
          logout
        </button>
      </div>
    </>
  );
}
