"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Note } from "@/db/schema";
import { deleteNote } from "@/server/notes";

interface NoteCardProps {
  note: Note;
}

const NoteCard = ({ note }: NoteCardProps) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const response = await deleteNote(note.id);

      if (response.success) {
        toast.success("Note deleted successfully");
        router.refresh();
      }
    } catch {
      toast.success("Failed to deleted notebook");
    } finally {
      setIsDeleting(false);
      setIsOpen(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p></p>
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        <Link href={`/dashboard/notebook/${note.notebookId}/note/${note.id}`}>
          <Button variant={"outline"}>View</Button>
        </Link>

        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogTrigger asChild>
            <Button variant={"destructive"} disabled={isDeleting}>
              {isDeleting ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Trash2 className="size-4" />
              )}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                note.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};

export default NoteCard;
