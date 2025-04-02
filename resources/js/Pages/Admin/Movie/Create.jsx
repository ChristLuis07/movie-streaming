import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, useForm } from "@inertiajs/react";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "", 
        is_featured: false,
    });


   const onHandleChange = (event) => {
       const { name, type, value, files } = event.target;

       if (type === "file") {
           setData(name, files[0]);
       } else if (name === "rating") {
           // Ensure the value is a valid float or empty
           const parsedValue = parseFloat(value);
           setData(name, isNaN(parsedValue) ? "" : parsedValue);
       } else {
           setData(name, value);
       }
   };

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.dashboard.movie.store"));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Insert a new Movie</h1>
            <hr className="mb-4" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                {/* Name */}
                <Label forInput="name" value="Name" />
                <Input
                    type="text"
                    name="name"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the name of the movie"
                    isError={errors.name}
                    className="bg-white border-alerange focus:bg-[#fff] focus:border-alerange mb-4"
                />

                {/* Category */}
                <Label forInput="category" value="Category" className="mt-4" />
                <Input
                    type="text"
                    name="category"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the Category of the movie"
                    isError={errors.category}
                    className="bg-white border-alerange focus:bg-[#fff] focus:border-alerange  mb-4"
                />

                {/* Video Url */}
                <Label
                    forInput="video_url"
                    value="Video URL"
                    className="mt-4"
                />
                <Input
                    type="url"
                    name="video_url"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the video url of the movie"
                    isError={errors.video_url}
                    className="bg-white border-alerange focus:bg-[#fff] focus:border-alerange  mb-4"
                />

                {/* Thumbnail */}
                <Label
                    forInput="thumbnail"
                    value="Thumbnail"
                    className="mt-4"
                />
                <Input
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Insert thumbnail of the movie"
                    isError={errors.thumbnail}
                    className="bg-white border-alerange focus:bg-[#fff] focus:border-alerange  mb-4"
                />

                {/* Rating */}
                <Label forInput="rating" value="Rating" className="mt-4" />
                <Input
                    type="number"
                    name="rating"
                    step="0.1"
                    min="0"
                    max="10"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter Rating of the movie"
                    isError={errors.rating}
                    className="bg-white border-alerange focus:bg-[#fff] focus:border-alerange mb-4"
                />

                {/* is Featured */}
                <div className="flex flex-row mt-4 items-center">
                    <Label
                        forInput="is_featured"
                        value="Is Featured"
                        className="mr-3 mt-1"
                    />
                    <Checkbox
                        name="is_featured"
                        handleChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
                </div>

                <Button type="submit" className="mt-4" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}
