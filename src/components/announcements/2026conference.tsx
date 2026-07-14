import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnnouncementModal from "../Announcements";
import RoutePath from "@/routes";

export default function CISON2026Conference() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    function handleClose() {
        setIsModalOpen(false);
    }
    return (
        <AnimatePresence>
            {
                isModalOpen && (
                    <AnnouncementModal
                        onClose={handleClose}
                        title="📢 Register Now: 2026 CISON International Conference"
                    >
                        <div className="space-y-4">
                            <p>
                                We are pleased to announce that official registration for the annual <span className="font-semibold text-slate-900">CISON International Conference</span> is now open!
                            </p>

                            {/* Event Quick Info Badge Grid */}
                            <div className="grid grid-cols-1 gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100 sm:grid-cols-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-600 text-lg">📅</span>
                                    <div>
                                        <p className="font-semibold text-slate-800">Date</p>
                                        <p className="text-slate-500">October 12 -16, 2026</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-indigo-600 text-lg">📍</span>
                                    <div>
                                        <p className="font-semibold text-slate-800">Venue</p>
                                        <p className="text-slate-500">Chida Hotel Event Center, Utako, Abuja, Nigeria</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-xs text-slate-400 mt-2">
                                *Ensure your professional profile details and membership status are fully updated on the portal before initiating registration to fast-track your passes.
                            </p>

                            {/* Action Buttons */}
                            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                                <button
                                    onClick={handleClose}
                                    className="w-full rounded-lg px-4 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-100 transition sm:w-auto"
                                >
                                    Dismiss
                                </button>
                                <button
                                    onClick={() => {
                                        // Replace with actual registration path or router navigation
                                        window.location.href = RoutePath.Conference2026;
                                        handleClose();
                                    }}
                                    className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:from-blue-700 hover:to-indigo-700 transition sm:w-auto"
                                >
                                    Proceed to Register
                                </button>
                            </div>
                        </div>
                    </AnnouncementModal>
                )
            }
        </AnimatePresence>
    )
}