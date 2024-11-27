import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PlusCircle, Upload, X } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TextEditor from "@/components/TextEditor";
import { RootState } from "@/redux/rootReducer";
import { useSelector } from "react-redux";

type ProductFormData = {
  title: string;
  description: string;
  thumbnail: FileList;
  images: FileList;
  category: string;
  subcategory: string;
  unitType: string;
  unitSize: string;
  stockSize: number;
  price: number;
  discount: number;
  tags: string;
};

export const ProductUploadModal: React.FC = () => {
  const [step, setStep] = useState(1);
  const [categoryId, setCategoryId] = useState<string>("");
  const [subcategories, setSubcategories] = useState<Array<{
    name: string;
    slug: string;
  }> | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [imagesPreviews, setImagesPreviews] = useState<
    Array<{ id: string; url: string }>
  >([]);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const categories = useSelector(
    (state: RootState) => state?.categories.Categories
  );
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    trigger,
  } = useForm<ProductFormData>();

  const watchTitle = watch("title");
  const watchDescription = watch("description");

  const onSubmit = (data: ProductFormData) => {
    console.log(data);
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newPreviews = files.map((file) => ({
      id: Math.random().toString(36).substring(7),
      url: URL.createObjectURL(file),
    }));
    setImagesPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeImage = (idToRemove: string) => {
    setImagesPreviews((prev) => prev.filter((img) => img.id !== idToRemove));
  };

  const handleAddMoreClick = () => {
    fileInputRef.current?.click();
  };

  const handleNextStep = async () => {
    const isValid = await trigger([
      "title",
      "description",
      "thumbnail",
      "images",
    ]);
    if (
      isValid &&
      watchTitle &&
      watchDescription &&
      thumbnailPreview &&
      imagesPreviews.length > 0
    ) {
      setStep(2);
    } else {
      if (!thumbnailPreview) {
        setThumbnailPreview(null);
      }
      if (imagesPreviews.length === 0) {
        setImagesPreviews([]);
      }
    }
  };

  useEffect(() => {
    if (categories) {
      const category = categories.find((c) => c._id === categoryId);
      if (category?.subcategories) {
        setSubcategories(category.subcategories);
      }
    }
  }, [categories, categoryId]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-[400px] h-10 bg-primary text-white"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add a new product
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-color-primary">
            {step === 1 ? "Product Details" : "Product Specifications"} (Step{" "}
            {step}/2)
          </DialogTitle>
        </DialogHeader>
        <div className="max-h-[80vh] overflow-y-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4">
            {step === 1 ? (
              //  step 1
              <div className="grid grid-cols-5 gap-6">
                <div className="space-y-6 col-span-2">
                  {/* product thumbnail */}
                  <div>
                    <Label htmlFor="thumbnail" className="mb-2 block">
                      Thumbnail
                    </Label>
                    <div className="relative">
                      <input
                        type="file"
                        id="thumbnail"
                        className="hidden"
                        accept="image/*"
                        {...register("thumbnail", {
                          required: "Thumbnail is required",
                          onChange: handleThumbnailChange,
                        })}
                      />
                      <label
                        htmlFor="thumbnail"
                        className={`flex flex-col items-center justify-center max-w-[300px] h-[200px] border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                          thumbnailPreview
                            ? "border-primary"
                            : "border-gray-300"
                        }`}
                      >
                        {!thumbnailPreview ? (
                          <>
                            <Upload className="w-8 h-8 text-gray-400 mb-2" />
                            <p className="text-sm text-gray-600">
                              Upload thumbnail
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              PNG, JPG up to 10MB
                            </p>
                          </>
                        ) : (
                          <div className="relative size-full">
                            <img
                              src={thumbnailPreview}
                              alt="Thumbnail preview"
                              className="w-full h-full object-cover rounded-md"
                            />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                setThumbnailPreview(null);
                              }}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </label>
                      {errors.thumbnail && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.thumbnail.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* product images */}
                  <div>
                    <Label htmlFor="images" className="mb-2 block">
                      Product Images
                    </Label>
                    <div className="relative">
                      <input
                        type="file"
                        id="images"
                        ref={fileInputRef}
                        className="hidden"
                        multiple
                        accept="image/*"
                        onChange={handleImagesChange}
                      />

                      {imagesPreviews.length === 0 ? (
                        <label
                          htmlFor="images"
                          className="flex flex-col items-center justify-center max-w-[300px] p-2 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors border-gray-300"
                        >
                          <Upload className="w-8 h-8 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-600">
                            Upload product images
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            PNG, JPG up to 10MB
                          </p>
                        </label>
                      ) : (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg">
                          <ScrollArea className="w-full">
                            <div className="flex items-center p-2 gap-4 relative">
                              <button
                                type="button"
                                onClick={handleAddMoreClick}
                                className="min-w-[80px] min-h-[80px] size-max border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:bg-gray-50 transition-colors"
                              >
                                <PlusCircle className="w-8 h-8 text-gray-400 mb-2" />
                                <span className="text-sm text-gray-600">
                                  Add More
                                </span>
                              </button>
                              {imagesPreviews.map((img) => (
                                <div key={img.id} className="relative group">
                                  <div className="size-[80px] relative">
                                    <img
                                      src={img.url}
                                      alt="Preview"
                                      className="w-full h-full object-cover rounded-lg"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => removeImage(img.id)}
                                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                                    >
                                      <X className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                          </ScrollArea>
                        </div>
                      )}
                      {errors.images && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.images.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="space-y-4 col-span-3 flex flex-col">
                  {/* product title */}
                  <div>
                    <Label htmlFor="title" className="mb-2 block">
                      Product Title
                    </Label>
                    <Input
                      id="title"
                      className="w-full"
                      placeholder="Enter product title"
                      {...register("title", {
                        required: "Title is required",
                      })}
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.title.message}
                      </p>
                    )}
                  </div>
                  {/* product description */}
                  <div className="flex-grow">
                    <Label htmlFor="description" className="mb-2 block">
                      Product Description
                    </Label>
                    <Controller
                      name="description"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Description is required" }}
                      render={({ field }) => (
                        <TextEditor
                          value={field.value}
                          onChange={field.onChange}
                          error={errors.description}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="col-span-5 flex justify-end">
                  <Button
                    type="button"
                    onClick={handleNextStep}
                    className="w-32 bg-primary hover:bg-primary/90"
                  >
                    Next
                  </Button>
                </div>
              </div>
            ) : (
              // step 2
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {/* product category */}
                <div>
                  <Label htmlFor="category" className="mb-2 block">
                    Category
                  </Label>
                  <Controller
                    name="category"
                    control={control}
                    rules={{ required: "Category is required" }}
                    render={({ field }) => (
                      <Select
                        onValueChange={(id) => {
                          field.onChange(id);
                          setCategoryId(id);
                        }}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category._id} value={category._id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.category.message}
                    </p>
                  )}
                </div>
                {/* product subcategory */}
                <div>
                  <Label htmlFor="subcategory" className="mb-2 block">
                    Subcategory
                  </Label>
                  <Controller
                    name="subcategory"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={!categoryId}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue
                            placeholder={
                              categoryId
                                ? "Select a subcategory"
                                : "Select a category first"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {subcategories?.map((sc) => (
                            <SelectItem key={sc.slug} value={sc.slug}>
                              {sc.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.subcategory && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subcategory.message}
                    </p>
                  )}
                </div>
                {/* product unit type */}
                <div>
                  <Label htmlFor="unitType" className="mb-2 block">
                    Unit Type
                  </Label>
                  <Controller
                    name="unitType"
                    control={control}
                    rules={{ required: "Unit type is required" }}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select unit type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="piece">Piece</SelectItem>
                          <SelectItem value="kg">Kilogram</SelectItem>
                          <SelectItem value="liter">Liter</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.unitType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.unitType.message}
                    </p>
                  )}
                </div>
                {/* product unit size */}
                <div>
                  <Label htmlFor="unitSize" className="mb-2 block">
                    Unit Size
                  </Label>
                  <Input
                    id="unitSize"
                    className="w-full"
                    placeholder="Enter unit size"
                    {...register("unitSize", {
                      required: "Unit size is required",
                    })}
                  />
                  {errors.unitSize && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.unitSize.message}
                    </p>
                  )}
                </div>
                {/* product stock size */}
                <div>
                  <Label htmlFor="stockSize" className="mb-2 block">
                    Stock Size
                  </Label>
                  <Input
                    id="stockSize"
                    type="number"
                    className="w-full"
                    placeholder="Enter stock size"
                    {...register("stockSize", {
                      required: "Stock size is required",
                      valueAsNumber: true,
                    })}
                  />
                  {errors.stockSize && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.stockSize.message}
                    </p>
                  )}
                </div>
                {/* product price */}
                <div>
                  <Label htmlFor="price" className="mb-2 block">
                    Price
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    className="w-full"
                    placeholder="Enter price"
                    {...register("price", {
                      required: "Price is required",
                      valueAsNumber: true,
                    })}
                  />
                  {errors.price && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.price.message}
                    </p>
                  )}
                </div>
                {/* product discount value */}
                <div>
                  <Label htmlFor="discount" className="mb-2 block">
                    Discount
                  </Label>
                  <Input
                    id="discount"
                    type="number"
                    step="0.01"
                    className="w-full"
                    placeholder="Enter discount"
                    {...register("discount", {
                      required: "Discount is required",
                      valueAsNumber: true,
                    })}
                  />
                  {errors.discount && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.discount.message}
                    </p>
                  )}
                </div>
                {/* product tags */}
                <div>
                  <Label htmlFor="tags" className="mb-2 block">
                    Tags
                  </Label>
                  <Input
                    id="tags"
                    className="w-full"
                    placeholder="Enter tags (comma-separated)"
                    {...register("tags", { required: "Tags are required" })}
                  />
                  {errors.tags && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.tags.message}
                    </p>
                  )}
                </div>
                {/* submit button */}
                <div className="flex justify-between col-span-2 mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="w-32"
                  >
                    Previous
                  </Button>
                  <Button
                    type="submit"
                    className="w-32 bg-primary hover:bg-primary/90"
                  >
                    Upload Product
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
