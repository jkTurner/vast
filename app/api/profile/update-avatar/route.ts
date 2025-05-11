import { r2 } from "@/lib/r2";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    
    const { fileType, fileName } = await req.json();
    const url = await getSignedUrl(
        r2,
        new PutObjectCommand({
            Bucket: process.env.R2_BUCKET!,
            Key: fileName,
            ContentType: fileType,
        }),
        { expiresIn: 60 } // 1 min
    );

    const publicUrl = `https://pub-1518e83fc5cc4df69c0b1b9e59dabf97.r2.dev/${fileName}`;


    return NextResponse.json({ url, publicUrl });
}